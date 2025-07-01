'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, MapPin, Phone, Mail, Clock, FileText, Users, Wrench } from 'lucide-react';

interface QuoteDialogProps {
  children: React.ReactNode;
}

export function QuoteDialog({ children }: QuoteDialogProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    
    // Project Details
    projectType: '',
    serviceCategory: '',
    projectLocation: '',
    waterDepth: '',
    projectDuration: '',
    urgency: '',
    
    // Project Description
    projectDescription: '',
    specificRequirements: '',
    budget: '',
    timeline: '',
    
    // Additional Services
    additionalServices: [] as string[],
    
    // Preferences
    preferredContact: '',
    contactTime: '',
    newsletter: false,
  });

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! Our team will contact you within 24 hours.');
    setOpen(false);
    setStep(1);
    // Reset form
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', company: '', position: '',
      projectType: '', serviceCategory: '', projectLocation: '', waterDepth: '',
      projectDuration: '', urgency: '', projectDescription: '', specificRequirements: '',
      budget: '', timeline: '', additionalServices: [], preferredContact: '',
      contactTime: '', newsletter: false,
    });
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.projectType && formData.serviceCategory && formData.projectLocation;
      case 3:
        return formData.projectDescription && formData.timeline;
      default:
        return true;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-600 flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Request a Quote
          </DialogTitle>
          <DialogDescription>
            Get a customized quote for your subsea and marine engineering project. Our experts will review your requirements and provide a detailed proposal.
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Contact Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Contact Information
                </h3>
                <p className="text-blue-600 text-sm">Please provide your contact details so we can reach you with your quote.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position/Title</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
                  <Wrench className="mr-2 h-5 w-5" />
                  Project Details
                </h3>
                <p className="text-green-600 text-sm">Tell us about your project requirements and specifications.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-construction">New Construction</SelectItem>
                      <SelectItem value="maintenance-repair">Maintenance & Repair</SelectItem>
                      <SelectItem value="inspection">Inspection & Survey</SelectItem>
                      <SelectItem value="decommissioning">Decommissioning</SelectItem>
                      <SelectItem value="emergency">Emergency Response</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="serviceCategory">Primary Service *</Label>
                  <Select value={formData.serviceCategory} onValueChange={(value) => handleInputChange('serviceCategory', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select service category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diving-services">Diving Services</SelectItem>
                      <SelectItem value="rov-services">ROV Services</SelectItem>
                      <SelectItem value="marine-construction">Marine Construction</SelectItem>
                      <SelectItem value="welding-services">Welding Services</SelectItem>
                      <SelectItem value="survey-services">Survey Services</SelectItem>
                      <SelectItem value="marine-civils">Marine & Civils</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="projectLocation">Project Location *</Label>
                  <Input
                    id="projectLocation"
                    value={formData.projectLocation}
                    onChange={(e) => handleInputChange('projectLocation', e.target.value)}
                    placeholder="e.g., Dubai, UAE or Arabian Gulf"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="waterDepth">Water Depth (if applicable)</Label>
                  <Input
                    id="waterDepth"
                    value={formData.waterDepth}
                    onChange={(e) => handleInputChange('waterDepth', e.target.value)}
                    placeholder="e.g., 50 meters"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="projectDuration">Expected Duration</Label>
                  <Select value={formData.projectDuration} onValueChange={(value) => handleInputChange('projectDuration', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3-days">1-3 Days</SelectItem>
                      <SelectItem value="1-week">1 Week</SelectItem>
                      <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
                      <SelectItem value="1-3-months">1-3 Months</SelectItem>
                      <SelectItem value="3-6-months">3-6 Months</SelectItem>
                      <SelectItem value="6-months-plus">6+ Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="urgency">Project Urgency</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency (24-48 hours)</SelectItem>
                      <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                      <SelectItem value="normal">Normal (1 month)</SelectItem>
                      <SelectItem value="flexible">Flexible (2+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Project Description */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-2 flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Project Description
                </h3>
                <p className="text-purple-600 text-sm">Provide detailed information about your project requirements.</p>
              </div>

              <div>
                <Label htmlFor="projectDescription">Project Description *</Label>
                <Textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                  placeholder="Please describe your project in detail, including objectives, scope of work, and any specific challenges..."
                  rows={4}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="specificRequirements">Specific Requirements</Label>
                <Textarea
                  id="specificRequirements"
                  value={formData.specificRequirements}
                  onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                  placeholder="Any specific technical requirements, certifications needed, equipment specifications, safety requirements, etc."
                  rows={3}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Budget Range (USD)</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                      <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Preferred Start Date *</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    placeholder="e.g., ASAP, Q2 2024, March 2024"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Additional Services (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {[
                    'Project Management',
                    'Safety Consulting',
                    'Environmental Assessment',
                    'Equipment Rental',
                    'Training Services',
                    'Emergency Support',
                    'Quality Assurance',
                    'Regulatory Compliance',
                    'Technical Documentation'
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.additionalServices.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <Label htmlFor={service} className="text-sm">{service}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Preferences & Review */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-2 flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Preferences & Review
                </h3>
                <p className="text-orange-600 text-sm">How would you like us to contact you, and review your quote request.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                  <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="video-call">Video Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="contactTime">Best Time to Contact</Label>
                  <Select value={formData.contactTime} onValueChange={(value) => handleInputChange('contactTime', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select time preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Subscribe to our newsletter for industry updates and project insights
                </Label>
              </div>

              {/* Quote Summary */}
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h4 className="font-semibold text-gray-900 mb-4">Quote Request Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><span className="font-medium">Contact:</span> {formData.firstName} {formData.lastName}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Company:</span> {formData.company || 'Not specified'}</p>
                  </div>
                  <div>
                    <p><span className="font-medium">Project Type:</span> {formData.projectType}</p>
                    <p><span className="font-medium">Service:</span> {formData.serviceCategory}</p>
                    <p><span className="font-medium">Location:</span> {formData.projectLocation}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">What happens next?</h4>
                    <ul className="text-sm text-blue-600 mt-2 space-y-1">
                      <li>• Our team will review your requirements within 24 hours</li>
                      <li>• A project specialist will contact you to discuss details</li>
                      <li>• We'll provide a detailed quote and project timeline</li>
                      <li>• Schedule a consultation if needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <div>
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
            </div>
            <div className="flex space-x-3">
              {step < 4 ? (
                <Button 
                  type="button" 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Next Step
                </Button>
              ) : (
                <Button 
                  type="submit"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Submit Quote Request
                </Button>
              )}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}