
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
    
    // In a real implementation, you would send this data to your backend
    console.log("Form data:", formData);
  };

  return (
    <section id="contact" className="py-24 section-padding bg-portfolio-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-portfolio-accent mb-2 font-medium"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-portfolio-text"
          >
            Have a project in mind? Let's discuss how I can help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-6"
          >
            <ContactCard
              icon={<Mail className="text-portfolio-accent" size={24} />}
              title="Email"
              details="contact@example.com"
              link="mailto:contact@example.com"
            />
            <ContactCard
              icon={<Phone className="text-portfolio-accent" size={24} />}
              title="Phone"
              details="+1 (555) 123-4567"
              link="tel:+15551234567"
            />
            <ContactCard
              icon={<MapPin className="text-portfolio-accent" size={24} />}
              title="Location"
              details="San Francisco, CA"
              link="#"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-portfolio-text mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10 placeholder:text-portfolio-text/50 text-portfolio-text"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-portfolio-text mb-2"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 placeholder:text-portfolio-text/50 text-portfolio-text"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-portfolio-text mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can I help you?"
                      className="bg-white/5 border-white/10 placeholder:text-portfolio-text/50 text-portfolio-text min-h-[150px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-white"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
};

const ContactCard = ({ icon, title, details, link }: ContactCardProps) => (
  <Card className="bg-white/5 hover:bg-white/10 transition-colors border-white/10">
    <CardContent className="p-5 flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <a
          href={link}
          className="text-portfolio-text hover:text-portfolio-accent transition-colors text-sm"
        >
          {details}
        </a>
      </div>
    </CardContent>
  </Card>
);

export default Contact;
