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
    setFormData({
      name: "",
      number: "",
      email: "",
      message: ""
    });
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
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (error) setError(null);
  };

  return (
    <section className="no-print" id="contact">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contactez-moi</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">Name *</label>
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
                    <Image 
                      src="/images/icon/success-icon.svg" 
                      alt="success-icon" 
                      width={24} 
                      height={24} 
                    />
                    <p className="text-green-700">
                      Parfait ! Votre message a été envoyé avec succès à mefoguehadjira@gmail.com. Vous recevrez une réponse bientôt.
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
                  className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </span>
                  <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </form>
            
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              {/* Social Links */}
              {contactData?.socialLinks && contactData.socialLinks.length > 0 && (
                <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                  {contactData.socialLinks.map((value, index) => (
                    <div key={`social-${index}`}>
                      <Link 
                        href={value.href} 
                        className="text-base sm:text-lg font-normal text-secondary hover:text-primary transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Contact Info */}
              {contactData?.contactInfo && contactData.contactInfo.length > 0 && (
                <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                  {contactData.contactInfo.map((value, index) => (
                    <div key={`contact-${index}`}>
                      <Link 
                        href={value.link} 
                        className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary transition-colors duration-200"
                      >
                        {value.label}
                      </Link>
                    </div>
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
