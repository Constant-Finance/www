export const metadata = { title: 'Contact — Constant Finance' }

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Contact Us</h1>
      <div className="space-y-4 text-gray-600">
        <p>
          For customer services and partnership inquiries, please contact us through the email:{' '}
          <a href="mailto:service@constfi.com" className="text-[#f78c1f] hover:underline">
            service@constfi.com
          </a>
        </p>
        <p>
          For policies, terms and other legal matters inquiries, please contact us through the
          email:{' '}
          <a href="mailto:legal@constfi.com" className="text-[#f78c1f] hover:underline">
            legal@constfi.com
          </a>
        </p>
      </div>
    </div>
  )
}
