import Reveal from './Reveal';

const SectionHeader = ({ title, subtitle, align = 'left', className = '' }) => (
  <Reveal className={className}>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-libre-caslon text-primary-white mb-4 ${
      align === 'center' ? 'text-center' : ''
    }`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg font-inter text-primary-muted leading-relaxed max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}>
        {subtitle}
      </p>
    )}
  </Reveal>
);

export default SectionHeader;
