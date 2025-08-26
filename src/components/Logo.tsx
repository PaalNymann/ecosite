import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero'
  className?: string
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-9 w-auto', 
    lg: 'h-12 w-auto',
    hero: 'h-48 w-auto md:h-[15rem] lg:h-[18rem]'
  }

  const logoSizes = {
    sm: { width: 90, height: 24 },
    md: { width: 135, height: 36 },
    lg: { width: 180, height: 48 },
    hero: { width: 900, height: 288 }
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Use main logo for hero, full logo for navigation */}
        <Image
          src={size === 'hero' ? "/Jiu Jitsu main.png" : "/Jiu Jitsu (5).png"}
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
