export function Subheader() {
    const currentDate = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  
    return (
      <div className="border-t-2 border-b-2 border-[#2c1810] py-2 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="font-newspaper-body text-sm">
            {currentDate}
          </p>
          <p className="font-newspaper-body text-sm">
            Vol. 1 No. 1
          </p>
        </div>
      </div>
    )
  }
  
  