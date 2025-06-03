import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';
import Card, { CardContent } from './Card';

const ContactForm = () => {
  /* --------------------------- estado y handlers -------------------------- */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSe2DNIWZVQugZ_G-rQCzO9EKpWr66ZXe8rbBBHtKYduKIeXyQ/formResponse';

    /* Reemplaza los IDs de entrada.* por los de tu propio formulario  */
    const body = new URLSearchParams({
      'entry.1064235632': formData.name,
      'entry.1330832081': formData.email,
      'entry.1233483376': formData.subject,
      'entry.608682247': formData.message,
    });

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error al enviar:', err);
    }
  };

  /* --------------------------- UI: igual que antes ------------------------ */
  return (
    <div className="max-w-2xl mx-auto animate-on-scroll">
      <Card>
        <CardContent className="p-8">
          {submitted ? (
            <p className="text-green-600 text-center font-medium">
              ✅ ¡Tu mensaje ha sido enviado correctamente!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* NOMBRE + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="Tu nombre"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* ASUNTO */}
              <div className="mb-6">
                <label htmlFor="subject" className="form-label">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Asunto de tu mensaje"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* MENSAJE */}
              <div className="mb-6">
                <label htmlFor="contact-message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  className="form-input"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                icon={<Send size={18} />}
                fullWidth
              >
                Enviar mensaje
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
