'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleChange('company', e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="service">Service of Interest</Label>
        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="subsea-engineering">Subsea Engineering</SelectItem>
            <SelectItem value="marine-construction">Marine Construction</SelectItem>
            <SelectItem value="marine-consultancy">Marine Consultancy</SelectItem>
            <SelectItem value="maintenance-repair">Maintenance & Repair</SelectItem>
            <SelectItem value="safety-compliance">Safety & Compliance</SelectItem>
            <SelectItem value="training-support">Training & Support</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell us about your project requirements..."
          className="mt-1"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Send Message
      </Button>
    </form>
  );
}