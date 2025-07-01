import { Metadata } from 'next'
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Offshore Platform Decommissioning | Subsea Solutions',
  description: 'Complete decommissioning of offshore platform infrastructure with environmental compliance and safety excellence.',
}

export default function OffshorePlatformDecommissioning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/projects">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Offshore Platform Decommissioning
              </h1>
              <p className="text-lg text-gray-600">
                Complete decommissioning of offshore platform infrastructure
              </p>
            </div>
            <Badge variant="secondary" className="w-fit">
              Completed
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive decommissioning project involved the complete removal and disposal of an offshore platform structure, including all subsea infrastructure, pipelines, and associated equipment. The project was executed with strict adherence to environmental regulations and industry best practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our team coordinated multiple specialized vessels, diving teams, and ROV operations to ensure safe and efficient removal of all platform components while minimizing environmental impact on the marine ecosystem.
                </p>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Zero Environmental Incidents</h4>
                      <p className="text-sm text-gray-600">Complete project execution without environmental impact</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Material Recovery</h4>
                      <p className="text-sm text-gray-600">All platform materials recovered and properly disposed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ahead of Schedule</h4>
                      <p className="text-sm text-gray-600">Project completed 2 weeks ahead of planned timeline</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                      <p className="text-sm text-gray-600">Full compliance with all environmental and safety regulations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Details */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Platform Details</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Platform height: 85 meters</li>
                      <li>• Total weight: 12,500 tonnes</li>
                      <li>• Water depth: 45 meters</li>
                      <li>• Foundation type: Steel jacket</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Removal Operations</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Heavy lift vessel deployment</li>
                      <li>• Underwater cutting operations</li>
                      <li>• Pipeline disconnection</li>
                      <li>• Environmental monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Duration</p>
                    <p className="text-sm text-gray-600">8 months</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">North Sea, UK Sector</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Team Size</p>
                    <p className="text-sm text-gray-600">45 specialists</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Used */}
            <Card>
              <CardHeader>
                <CardTitle>Services Utilized</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Commercial Diving</Badge>
                  <Badge variant="outline">ROV Operations</Badge>
                  <Badge variant="outline">Heavy Lifting</Badge>
                  <Badge variant="outline">Environmental Monitoring</Badge>
                  <Badge variant="outline">Project Management</Badge>
                  <Badge variant="outline">Marine Engineering</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Project?</CardTitle>
                <CardDescription>
                  Get in touch to discuss your decommissioning requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact">
                  <Button className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}