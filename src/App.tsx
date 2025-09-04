// import React from 'react';
// import { Monitor, Code, Settings, HardHat, Wrench, Triangle, Mail, Send } from 'lucide-react';

// function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = React.useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   React.useEffect(() => {
//     // Set target date to 30 days from now
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 30);

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate.getTime() - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000)
//         });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="grid grid-cols-4 gap-4 mb-8">
//       {[
//         { label: 'Days', value: timeLeft.days },
//         { label: 'Hours', value: timeLeft.hours },
//         { label: 'Minutes', value: timeLeft.minutes },
//         { label: 'Seconds', value: timeLeft.seconds }
//       ].map((item, index) => (
//         <div key={item.label} className={`text-center animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
//           <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
//             <div className="text-2xl lg:text-3xl font-bold text-gray-800 animate-number-pulse">
//               {String(item.value).padStart(2, '0')}
//             </div>
//             <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">
//               {item.label}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function EmailSubscription() {
//   const [email, setEmail] = React.useState('');
//   const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Basic email validation. Replace with real API call when backend is ready.
//     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     if (!isValid) {
//       setStatus('error');
//       return;
//     }
//     setStatus('loading');
//     setTimeout(() => {
//       setStatus('success');
//     }, 800);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center gap-3">
//       <div className="relative flex-1">
//         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             if (status !== 'idle') setStatus('idle');
//           }}
//           placeholder="Enter your email"
//           className="w-full pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 outline-none transition"
//           aria-label="Email address"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={status === 'loading' || status === 'success'}
//         className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60 transition"
//       >
//         <Send className="w-4 h-4" />
//         {status === 'success' ? 'Subscribed' : status === 'loading' ? 'Submitting...' : 'Notify me'}
//       </button>
//       {status === 'error' && (
//         <span className="text-red-600 text-sm">Enter a valid email.</span>
//       )}
//     </form>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-gradient-x"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse-slow"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse-slow animation-delay-1000"></div>
//       </div>

//       {/* Brand Logo at top */}
//       <div className="absolute top-6 left-6 z-20 animate-fade-in">
//         <span className="ml-2 text-3xl font-bold text-slate-900 drop-shadow-sm">
//           Instockly<span className="text-red-600">.</span>
//         </span>
//       </div>

//       {/* Enhanced Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Animated geometric shapes */}
//         <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40 animate-float-slow shadow-lg blur-sm"></div>
//         <div className="absolute top-32 left-32 w-12 h-12 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full opacity-50 animate-float animation-delay-500 shadow-lg blur-sm"></div>
//         <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full opacity-35 animate-float-slow animation-delay-1000 shadow-lg blur-sm"></div>
        
//         {/* Additional floating elements */}
//         <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-30 animate-float animation-delay-1500 shadow-md blur-sm"></div>
//         <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full opacity-25 animate-float-slow animation-delay-2000 shadow-md blur-sm"></div>

//         {/* Moving particles */}
//         <div className="absolute top-20 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-move-diagonal opacity-60 shadow-sm"></div>
//         <div className="absolute top-60 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-move-diagonal animation-delay-700 opacity-70 shadow-sm"></div>
//         <div className="absolute bottom-60 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-move-diagonal animation-delay-1200 opacity-50 shadow-sm"></div>
//         <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-move-diagonal animation-delay-1800 opacity-60"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-move-diagonal animation-delay-2400 opacity-55"></div>

//         {/* Large gradient orbs */}
//         <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-300/20 rounded-full opacity-40 animate-pulse-slow shadow-2xl blur-xl"></div>
//         <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-orange-200/25 to-pink-300/20 rounded-full opacity-30 animate-pulse-slow animation-delay-800 shadow-2xl blur-xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-200/20 to-indigo-300/15 rounded-full opacity-25 animate-pulse-slow animation-delay-1600 shadow-xl blur-2xl"></div>

//         {/* Rotating gears with enhanced styling */}
//         <div className="absolute top-20 right-20 opacity-8">
//           <Settings className="w-32 h-32 text-blue-300/40 animate-spin-very-slow drop-shadow-lg" />
//         </div>
//         <div className="absolute top-40 right-40 opacity-6">
//           <Settings className="w-24 h-24 text-purple-300/30 animate-spin-reverse-slow drop-shadow-md" />
//         </div>
//         <div className="absolute bottom-32 right-16 opacity-7">
//           <Settings className="w-40 h-40 text-indigo-300/35 animate-spin-very-slow drop-shadow-lg" />
//         </div>
//         <div className="absolute top-60 right-60 opacity-5">
//           <Settings className="w-16 h-16 text-cyan-300/40 animate-spin-reverse-slow drop-shadow-sm" />
//         </div>

//         {/* Animated lines */}
//         <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent animate-slide-horizontal"></div>
//         <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent animate-slide-horizontal animation-delay-3000"></div>
        
//         {/* Floating triangles */}
//         <div className="absolute top-1/3 left-1/4 opacity-20">
//           <Triangle className="w-8 h-8 text-blue-400 animate-float animation-delay-2200" />
//         </div>
//         <div className="absolute bottom-1/3 right-1/4 opacity-15">
//           <Triangle className="w-6 h-6 text-purple-400 animate-float-slow animation-delay-2800" />
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-6 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
//           {/* Left Content */}
//           <div className="lg:w-1/2 mb-6 lg:mb-0 animate-fade-in-left pl-6">
//             {/* Main Heading */}
//             <div className="mb-4 mt-12">
//               <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
//                 <span className="text-blue-500 block animate-slide-in-left">Under</span>
//                 <span className="text-gray-800 block animate-slide-in-left animation-delay-300">Construction</span>
//               </h2>
//             </div>

//             {/* Description */}
//             <div className="mb-8 animate-fade-in-up animation-delay-600">
//               <p className="text-gray-600 text-lg leading-relaxed max-w-md">
//                 We're working hard to bring you something amazing! Our team of skilled developers is building the next generation of digital experiences. Stay tuned for something extraordinary that's worth the wait.
//               </p>
//             </div>

//             {/* Countdown Timer */}
//             <div className="mb-8">
//               <CountdownTimer />
//             </div>

//             {/* Email Subscription */}
//             <div className="mb-8">
//               <EmailSubscription />
//             </div>
//           </div>

//           {/* Right Illustration → replaced with image */}
//           {/* <div className="lg:w-1/2 flex justify-center animate-fade-in-right">
//             <img
//               src="/Instockly_Coming.png"
//               alt="Under Construction"
//               className="w-[600px] h-auto object-contain "
//             />
//           </div> */}
//           {/* Right Video */}
//           <div className="lg:w-1/2 flex justify-center animate-fade-in-right">
//             <video
//               src="/Instockly_V.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-[600px] h-auto object-contain rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50% }
//           50% { background-position: 100% 50% }
//         }
//         @keyframes slide-horizontal {
//           0% { transform: translateX(-100%) }
//           100% { transform: translateX(100%) }
//         }
//         .animate-gradient-x { animation: gradient-x 15s ease infinite }
//         .animate-slide-horizontal { animation: slide-horizontal 8s ease-in-out infinite }
//       `}</style>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { Settings, Triangle, Mail, Send } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item, index) => (
        <div key={item.label} className={`text-center animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 animate-number-pulse">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium">
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmailSubscription() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation. Replace with real API call when backend is ready.
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Enter your email"
            className="w-full pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 outline-none transition"
            aria-label="Email address"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60 transition"
        >
          <Send className="w-4 h-4" />
          {status === 'success' ? 'Subscribed' : status === 'loading' ? 'Submitting...' : 'Notify me'}
        </button>
      </form>
      {status === 'error' && (
        <span className="text-red-600 text-sm mt-2 block">Enter a valid email.</span>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse-slow animation-delay-1000"></div>
      </div>

      {/* Brand Logo at top */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 animate-fade-in">
        <span className="ml-2 text-2xl sm:text-3xl font-bold text-slate-900 drop-shadow-sm">
          Instockly<span className="text-red-600">.</span>
        </span>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated geometric shapes - Hide some on mobile */}
        <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40 animate-float-slow shadow-lg blur-sm"></div>
        <div className="hidden sm:block absolute top-32 left-32 w-12 h-12 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full opacity-50 animate-float animation-delay-500 shadow-lg blur-sm"></div>
        <div className="hidden sm:block absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full opacity-35 animate-float-slow animation-delay-1000 shadow-lg blur-sm"></div>
        
        {/* Additional floating elements - Hide on mobile */}
        <div className="hidden sm:block absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-30 animate-float animation-delay-1500 shadow-md blur-sm"></div>
        <div className="hidden sm:block absolute bottom-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full opacity-25 animate-float-slow animation-delay-2000 shadow-md blur-sm"></div>

        {/* Moving particles - Hide on mobile */}
        <div className="hidden sm:block absolute top-20 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-move-diagonal opacity-60 shadow-sm"></div>
        <div className="hidden sm:block absolute top-60 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-move-diagonal animation-delay-700 opacity-70 shadow-sm"></div>
        <div className="hidden sm:block absolute bottom-60 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-move-diagonal animation-delay-1200 opacity-50 shadow-sm"></div>
        <div className="hidden sm:block absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-move-diagonal animation-delay-1800 opacity-60"></div>
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-move-diagonal animation-delay-2400 opacity-55"></div>

        {/* Large gradient orbs - Smaller on mobile */}
        <div className="absolute -top-16 -right-16 w-48 h-48 sm:-top-32 sm:-right-32 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/30 to-purple-300/20 rounded-full opacity-40 animate-pulse-slow shadow-2xl blur-xl"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 sm:-bottom-32 sm:-left-32 sm:w-80 sm:h-80 bg-gradient-to-tr from-orange-200/25 to-pink-300/20 rounded-full opacity-30 animate-pulse-slow animation-delay-800 shadow-2xl blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-r from-cyan-200/20 to-indigo-300/15 rounded-full opacity-25 animate-pulse-slow animation-delay-1600 shadow-xl blur-2xl"></div>

        {/* Rotating gears with enhanced styling - Hide on mobile */}
        <div className="hidden sm:block absolute top-20 right-20 opacity-8">
          <Settings className="w-32 h-32 text-blue-300/40 animate-spin-very-slow drop-shadow-lg" />
        </div>
        <div className="hidden sm:block absolute top-40 right-40 opacity-6">
          <Settings className="w-24 h-24 text-purple-300/30 animate-spin-reverse-slow drop-shadow-md" />
        </div>
        <div className="hidden sm:block absolute bottom-32 right-16 opacity-7">
          <Settings className="w-40 h-40 text-indigo-300/35 animate-spin-very-slow drop-shadow-lg" />
        </div>
        <div className="hidden sm:block absolute top-60 right-60 opacity-5">
          <Settings className="w-16 h-16 text-cyan-300/40 animate-spin-reverse-slow drop-shadow-sm" />
        </div>

        {/* Animated lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent animate-slide-horizontal"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent animate-slide-horizontal animation-delay-3000"></div>
        
        {/* Floating triangles - Hide on mobile */}
        <div className="hidden sm:block absolute top-1/3 left-1/4 opacity-20">
          <Triangle className="w-8 h-8 text-blue-400 animate-float animation-delay-2200" />
        </div>
        <div className="hidden sm:block absolute bottom-1/3 right-1/4 opacity-15">
          <Triangle className="w-6 h-6 text-purple-400 animate-float-slow animation-delay-2800" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-16 sm:pt-0">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-6 lg:mb-0 animate-fade-in-left px-2 sm:pl-6">
            {/* Main Heading */}
            <div className="mb-4 mt-4 sm:mt-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-blue-500 block animate-slide-in-left">Under</span>
                <span className="text-gray-800 block animate-slide-in-left animation-delay-300">Construction</span>
              </h2>
            </div>

            {/* Description */}
            <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-600">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
                We're working hard to bring you something amazing! Our team of skilled developers is building the next generation of digital experiences. Stay tuned for something extraordinary that's worth the wait.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6 sm:mb-8">
              <CountdownTimer />
            </div>

            {/* Email Subscription */}
            <div className="mb-8">
              <EmailSubscription />
            </div>
          </div>

          {/* Right Video */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in-right mt-6 sm:mt-0">
            <video
              src="/Instockly_V.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[600px] h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        @keyframes slide-horizontal {
          0% { transform: translateX(-100%) }
          100% { transform: translateX(100%) }
        }
        .animate-gradient-x { animation: gradient-x 15s ease infinite }
        .animate-slide-horizontal { animation: slide-horizontal 8s ease-in-out infinite }
      `}</style>
    </div>
  );
}

export default App;