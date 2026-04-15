import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { clinicData } from "@/lib/data"
import { formatAddressStreet, phoneDigits } from "@/lib/utils"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

export function LocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${clinicData.address.street}, ${clinicData.address.neighborhood}, ${clinicData.address.city}`
  )}`

  return (
    <Section variant="muted">
      <SectionHeader
        subtitle="Localização"
        title="Vila Clementino, São Paulo"
        description={clinicData.locationTagline}
      />

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={clinicData.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização — ${clinicData.clinicName}`}
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Info Card */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full">
            <h3 className="mb-5 text-lg font-semibold text-foreground">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    {formatAddressStreet(clinicData.address)}
                    <br />
                    {clinicData.address.neighborhood} - {clinicData.address.city}/
                    {clinicData.address.state}
                    {clinicData.address.zip ? (
                      <>
                        <br />
                        CEP: {clinicData.address.zip}
                      </>
                    ) : null}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Horário</p>
                  <p className="text-sm text-muted-foreground">
                    {clinicData.hours.weekdays}
                    <br />
                    {clinicData.hours.saturday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefones</p>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href={`tel:${phoneDigits(clinicData.phone)}`}
                      className="text-primary hover:underline"
                    >
                      {clinicData.phone}
                    </a>
                    <span className="text-muted-foreground"> · </span>
                    <a
                      href={`tel:${phoneDigits(clinicData.phoneMobile)}`}
                      className="text-primary hover:underline"
                    >
                      {clinicData.phoneMobile}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-5 w-full" asChild>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4 mr-2" />
                Como Chegar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
