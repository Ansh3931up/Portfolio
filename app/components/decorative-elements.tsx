export function NewspaperBorder() {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary opacity-50" />
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary opacity-50" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary opacity-50" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary opacity-50" />
      </div>
    )
  }
  
  export function NewspaperDivider() {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="h-px w-16 bg-primary opacity-50" />
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="h-px w-16 bg-primary opacity-50" />
      </div>
    )
  }
  
  export function ColorDots() {
    return (
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#C6A07D]" />
        <div className="w-3 h-3 rounded-full bg-[#8B4513]" />
        <div className="w-3 h-3 rounded-full bg-[#2c1810]" />
      </div>
    )
  }
  
  