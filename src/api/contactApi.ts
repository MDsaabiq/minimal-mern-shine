
// This is a placeholder API client for contacting a backend service
// In a real implementation, this would connect to an Express/Node.js backend

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // In a real implementation, this would be a fetch or axios request to your backend
  console.log('Submitting form data:', formData);
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
    }, 1000);
  });
};
