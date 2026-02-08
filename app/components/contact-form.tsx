import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import type { FormEvent } from "react"

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const visitorPhone = formData.get("visitorPhone") // Nomor WA pengirim
    const message = formData.get("message")

    const targetPhone = "6282330741775" // Nomor WA tujuan (Anda)

    // Menyusun template pesan
    const text = `Halo, saya *${name}* (${visitorPhone}).\n\n*Pesan:*\n${message}`

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${targetPhone}?text=${encodedText}`, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
      <div className="flex">
        {/* Input Nama */}
        <div className="py-4 ps-4 pe-2 border-e border-b border-dashed w-6/12">
          <Label className="mb-2" htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" placeholder="Your name..." required />
        </div>

        {/* Input Nomor WA Pengirim */}
        <div className="py-4 ps-2 pe-4 border-b border-dashed w-6/12">
          <Label className="mb-2" htmlFor="visitorPhone">WhatsApp</Label>
          <Input
            id="visitorPhone"
            name="visitorPhone"
            type="number"
            placeholder="0812..."
            required
          />
        </div>
      </div>

      {/* Input Pesan - Mengambil sisa ruang agar penuh */}
      <div className="flex-grow p-4 border-b border-dashed">
        <Label className="mb-2" htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          className="min-h-3/4 resize-none"
          required
        />
      </div>

      <div className="p-4">
        <Button type="submit" className="w-full">
          Send to WhatsApp
        </Button>
      </div>
    </form>
  )
}