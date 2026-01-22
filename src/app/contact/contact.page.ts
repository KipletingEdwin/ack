import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false,
})
export class ContactPage implements OnInit {

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  };

  isSubmitting = false;

  constructor() { }

  ngOnInit() {
  }

  async submitForm(contactForm: NgForm) {
    if (contactForm.invalid) {
      // Show validation error
      this.showToast('Please fill in all required fields', 'warning');
      return;
    }

    this.isSubmitting = true;

    try {
      // Simulate API call - Replace with your actual backend service
      await this.sendContactForm(this.form);
      
      // Success
      this.showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
      
      // Reset form
      this.resetForm(contactForm);
      
    } catch (error) {
      // Error handling
      this.showToast('Failed to send message. Please try again.', 'danger');
      console.error('Error submitting form:', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  private async sendContactForm(formData: ContactForm): Promise<void> {
    // TODO: Replace with your actual API endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        
        // Simulate success (90% of the time)
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Simulated error'));
        }
      }, 1500);
    });

    // Example of actual implementation:
    /*
    const response = await fetch('https://your-api.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return response.json();
    */
  }

  private resetForm(contactForm: NgForm) {
    this.form = {
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: ''
    };
    contactForm.resetForm();
  }

  private async showToast(message: string, color: string) {
    // You can implement this with Ionic Toast Controller
    // For now, using console and alert
    console.log(`${color.toUpperCase()}: ${message}`);
    
    // TODO: Implement proper toast using ToastController
    /*
    import { ToastController } from '@ionic/angular';
    
    constructor(private toastController: ToastController) {}
    
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'top'
    });
    await toast.present();
    */
    
    // Temporary alert for demonstration
    if (color === 'success') {
      alert(message);
    }
  }

  // Optional: Email validation
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Optional: Phone validation
  isValidPhone(phone: string): boolean {
    // Kenyan phone number format
    const phoneRegex = /^(\+254|0)?[17]\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

}