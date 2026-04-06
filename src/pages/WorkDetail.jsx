import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const WorkDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const project = {
    id,
    title: `Project ${id}`,
    category: 'Lifestyle Photography',
    description: 'A comprehensive look at this creative project showcasing authentic moments and compelling visual storytelling.',
    fullDescription: `This project represents a deep dive into lifestyle photography, capturing genuine moments 
    that tell a story. The approach was natural and grounded, focusing on creating images that feel premium 
    and trustworthy. Every shot was carefully composed to enhance rather than compete with the subject matter.`,
    details: {
      client: 'Sample Client',
      year: '2024',
      role: 'Lead Photographer',
      duration: '3 months',
    },
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/works"
          className="inline-flex items-center text-primary-olive hover:text-primary-white transition-colors mb-8 font-inter"
        >
          <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Works
        </Link>

        {/* Hero Image */}
        <Reveal direction="up" durationMs={1000}>
          <div className="aspect-video bg-primary-grey rounded-lg mb-12" />
        </Reveal>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <Reveal direction="left" durationMs={950} className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-sm font-inter text-primary-olive uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-libre-caslon italic text-primary-white mt-2 mb-4">
                {project.title}
              </h1>
              <p className="text-xl font-inter text-primary-muted leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="pt-6 border-t border-primary-grey">
              <h2 className="text-2xl font-libre-caslon italic text-primary-white mb-4">
                About This Project
              </h2>
              <p className="text-lg font-inter text-primary-muted leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delayMs={120} durationMs={950} className="space-y-6">
            <div className="bg-primary-grey bg-opacity-10 p-6 rounded-lg border border-primary-grey">
              <h3 className="text-xl font-libre-caslon text-primary-white mb-4">Project Details</h3>
              <div className="space-y-3">
                {Object.entries(project.details).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm font-inter text-primary-muted capitalize">{key}</dt>
                    <dd className="text-base font-inter text-primary-white mt-1">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Image Gallery */}
        <Reveal direction="up" durationMs={950}>
          <div className="mb-16">
            <h2 className="text-3xl font-libre-caslon italic text-primary-white mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="aspect-square bg-primary-grey rounded-lg" />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Next Project CTA */}
        <Reveal direction="up" delayMs={80}>
          <div className="text-center py-12 border-t border-primary-grey">
            <h2 className="text-2xl md:text-3xl font-libre-caslon italic text-primary-white mb-6">
              Interested in Working Together?
            </h2>
            <Link to="/contact">
              <Button variant="primary">Get in Touch</Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default WorkDetail;
