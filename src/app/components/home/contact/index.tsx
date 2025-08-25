"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ContactInfo {
  label: string;
  link: string;
}

interface SocialLink {
  title: string;
  href: string;
}

interface ContactData {
  contactInfo?: ContactInfo[];
  socialLinks?: SocialLink[];
}

interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };
    fetchData();
  }, []);

  const resetForm = () => {
    setFormData({ name: "", number: "", email: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mefoguehadjira@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.number,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name}`,
          _template: "table",
          _captcha: false,
          _next: window.location.href
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        resetForm();
        setTimeout(() => setSubmitted(false), 5000); // hide success after 5s
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  // auto-hide error after 5s
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <section id="contact" className="no-print">
      <div className="container mx-auto">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contactez-moi</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Formulaire */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">Nom *</label>
                    <input
                      required
                      className="input"
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="label">Téléphone *</label>
                    <input
                      required
                      className="input"
                      id="number"
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label">Email *</label>
                  <input
                    required
                    className="input"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label">Message *</label>
                  <textarea
                    required
                    className="input"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={4}
                    placeholder="Parlez-moi de votre projet ou de votre demande..."
                  />
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <Image src="/images/icon/success-icon.svg" alt="success-icon" width={24} height={24} />
                    <p className="text-green-700">
                      Parfait ! Votre message a été envoyé avec succès.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-red-100 rounded-full">
                      <span className="text-red-600 text-sm font-bold">!</span>
                    </div>
                    <p className="text-red-700">Erreur : {error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden cursor-pointer w-fit py-3 px-6 border border-primary rounded-full group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </span>
                  <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </form>

            {/* Bloc Social & Contact Info */}
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-start md:items-end">
              {/* Social Links */}
              {contactData?.socialLinks?.length > 0 && (
                <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                  {contactData.socialLinks.map((link, idx) => (
                    <Link
                      key={`social-${idx}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Contact Info */}
              {contactData?.contactInfo?.length > 0 && (
                <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                  {contactData.contactInfo.map((info, idx) => (
                    <Link
                      key={`contact-${idx}`}
                      href={info.link}
                      className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary transition-colors duration-200"
                    >
                      {info.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

