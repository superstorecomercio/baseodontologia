"use client"

import { useId, useRef, useState, type FormEvent } from "react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { clinicData } from "@/lib/data"
import { cn } from "@/lib/utils"

const subjectLabels = {
  agendamento: "Agendar consulta",
  orcamento: "Solicitar orçamento",
  duvida: "Tirar dúvidas",
  outro: "Outro",
} as const

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo.").max(120),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido.")
    .max(40, "Telefone muito longo."),
  email: z.string().trim().email("Informe um e-mail válido."),
  subject: z.enum(
    Object.keys(subjectLabels) as [keyof typeof subjectLabels],
    { errorMap: () => ({ message: "Selecione um assunto." }) },
  ),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre como podemos ajudar.")
    .max(4000, "Mensagem muito longa."),
})

type FieldErrors = Partial<
  Record<keyof z.infer<typeof contactSchema>, string>
>

function fieldClasses(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20",
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-primary",
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-xs text-destructive" role="alert">
      {message}
    </p>
  )
}

/** Envio gratuito sem API key: POST para FormSubmit, que encaminha ao e-mail da clínica. */
const formSubmitAction = `https://formsubmit.co/${clinicData.email}`

export function ContactForm() {
  const formId = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const subjectHiddenRef = useRef<HTMLInputElement>(null)
  const nextHiddenRef = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isSending, setIsSending] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const fd = new FormData(form)

    if ((fd.get("_gotcha") as string | null)?.trim()) {
      return
    }

    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    })

    if (!parsed.success) {
      const next: FieldErrors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]
        if (typeof key === "string" && !(key in next)) {
          next[key as keyof FieldErrors] = issue.message
        }
      }
      setErrors(next)
      return
    }

    setErrors({})
    const { name, subject } = parsed.data
    const subjectLabel = subjectLabels[subject]

    if (subjectHiddenRef.current) {
      subjectHiddenRef.current.value = `[Site] ${subjectLabel} — ${name}`
    }
    if (nextHiddenRef.current && typeof window !== "undefined") {
      nextHiddenRef.current.value = `${window.location.origin}/contato?enviado=1`
    }

    setIsSending(true)
    form.submit()
  }

  return (
    <form
      ref={formRef}
      action={formSubmitAction}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      <input type="hidden" name="_subject" ref={subjectHiddenRef} defaultValue="" />
      <input type="hidden" name="_next" ref={nextHiddenRef} defaultValue="" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div aria-hidden className="sr-only">
        <label htmlFor={`${formId}-gotcha`}>Não preencha</label>
        <input
          id={`${formId}-gotcha`}
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Nome completo
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            name="name"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={fieldClasses(Boolean(errors.name))}
            placeholder="Seu nome"
          />
          <FieldError id={`${formId}-name-error`} message={errors.name} />
        </div>

        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Telefone
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={fieldClasses(Boolean(errors.phone))}
            placeholder="(11) 95959-3508"
          />
          <FieldError id={`${formId}-phone-error`} message={errors.phone} />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${formId}-email`}
          className="mb-2 block text-sm font-medium text-foreground"
        >
          E-mail
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className={fieldClasses(Boolean(errors.email))}
          placeholder="seu@email.com"
        />
        <FieldError id={`${formId}-email-error`} message={errors.email} />
      </div>

      <div>
        <label
          htmlFor={`${formId}-subject`}
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Assunto
        </label>
        <select
          id={`${formId}-subject`}
          name="subject"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? `${formId}-subject-error` : undefined}
          className={fieldClasses(Boolean(errors.subject))}
        >
          <option value="" disabled>
            Selecione um assunto
          </option>
          <option value="agendamento">Agendar Consulta</option>
          <option value="orcamento">Solicitar Orçamento</option>
          <option value="duvida">Tirar Dúvidas</option>
          <option value="outro">Outro</option>
        </select>
        <FieldError id={`${formId}-subject-error`} message={errors.subject} />
      </div>

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Mensagem
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={cn(fieldClasses(Boolean(errors.message)), "resize-none")}
          placeholder="Como podemos ajudar?"
        />
        <FieldError id={`${formId}-message-error`} message={errors.message} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSending}>
        {isSending ? "Enviando..." : "Enviar mensagem"}
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Na primeira vez, o FormSubmit pode pedir confirmação por e-mail no endereço{" "}
        <span className="text-foreground/90">{clinicData.email}</span> antes de
        liberar o envio. Depois disso, as mensagens do site chegam direto na caixa
        de entrada.
      </p>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Ao enviar você concorda em ser contatado pela Base Odontologia pelos dados
        informados.
      </p>
    </form>
  )
}
