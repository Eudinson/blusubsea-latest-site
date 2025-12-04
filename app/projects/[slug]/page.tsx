import { notFound } from 'next/navigation';
import projects from '@/app/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Waves, Ship, Clock } from 'lucide-react';
import Image from 'next/image';
import { ProjectGallery } from '@/components/project-gallery';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const stats = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Waves, label: 'Depth', value: project.depth },
    { icon: Ship, label: 'Vessel', value: project.vessel },
    { icon: Clock, label: 'Duration', value: project.duration },
  ].filter(stat => stat.value);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src={project.background}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-900/80" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl animate-fadeIn">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-6 -mt-24 mb-16 relative z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="border-none bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[280px]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideUp 0.6s ease-out forwards',
                }}
              >
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 letter-spacing-wide">
                    {stat.label}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              <h2 className="text-4xl font-bold text-gray-900">Project Overview</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">Project Gallery</h2>
          </div>
          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </div>
    </div>
  );
}
