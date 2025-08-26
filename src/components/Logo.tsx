import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero'
  className?: string
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-4 w-auto',
    md: 'h-6 w-auto', 
    lg: 'h-8 w-auto',
    hero: 'h-48 w-auto md:h-[15rem] lg:h-[18rem]'
  }

  const logoSizes = {
    sm: { width: 60, height: 16 },
    md: { width: 90, height: 24 },
    lg: { width: 120, height: 32 },
    hero: { width: 900, height: 288 }
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Use the actual pixelated logo image */}
        <Image
          src="/Jiu Jitsu (5).png"
          alt="Jiu Jitsu Quest"
          width={logoSizes[size].width}
          height={logoSizes[size].height}
          className={`${sizeClasses[size]} object-cover object-center`}
          style={{ objectPosition: 'center' }}
          priority
        />
      </div>
    </div>
  )
}
