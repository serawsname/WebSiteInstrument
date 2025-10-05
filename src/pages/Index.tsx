import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Music, BookOpen, Users, Star, Shield, Sun, Moon, Image, Headphones } from "lucide-react";
import thaiInstrumentsHero from "@/assets/thai-instruments-hero.jpg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/drive/u/1/folders/1BPB4a2NQg5A-wffM5q5ZTzBtMc-W0y2l';
    link.download = 'Thai_Instrument.apk';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-thai-cream dark:to-black/40">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/favicon.ico" alt="Logo" className="h-9 w-9" />
                         <span className="text-lg font-bold tracking-wide">เรียนรู้เครื่องดนตรีไทยเบื้องต้น</span>
          </a>
          <div className="flex items-center gap-3">
                         <Button variant="thai" size="sm" className="hidden sm:inline-flex" onClick={handleDownload}>
               <Download className="mr-2 h-4 w-4" /> ดาวน์โหลดฟรี
             </Button>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                className="rounded-full border border-border hover:bg-accent"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                title={theme === "dark" ? "ธีมเหลือง-ขาว" : "ธีมเหลือง-ดำ"}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-thai-gold" />
                ) : (
                  <Moon className="h-5 w-5 text-thai-gold" />
                )}
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        {/* Floating shapes */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-thai-gold/20 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-float-fast" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              
                             <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                 เรียนรู้เครื่องดนตรีไทยเบื้องต้น
               </h1>
                             <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                 เรียนรู้เครื่องดนตรีไทยแบบง่ายๆ สำหรับผู้เริ่มต้น
               </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                 <Button variant="thai" size="lg" className="text-lg px-8 py-6" onClick={handleDownload}>
                   <Download className="mr-2 h-5 w-5" /> ดาวน์โหลดฟรี
                 </Button>
                <Button variant="ghost" size="lg" className="text-lg px-8 py-6">
                  <a href="#features">ดูฟีเจอร์</a>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <img
                  src={thaiInstrumentsHero}
                  alt="เครื่องดนตรีไทย"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-thai transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-thai-gold text-foreground rounded-full p-3 shadow-elegant animate-pulse">
                  <Music className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-thai-gold-dark">
            ฟีเจอร์ที่น่าสนใจ
          </h2>
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <Card className="bg-gradient-card border-thai-gold/20 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
               <CardContent className="p-8 text-center">
                 <div className="bg-thai-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                   <Music className="h-8 w-8 text-foreground" />
                 </div>
                 <h3 className="text-xl font-semibold mb-4 text-thai-gold-dark">เรียนรู้ง่าย</h3>
               </CardContent>
             </Card>

             <Card className="bg-gradient-card border-thai-gold/20 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
               <CardContent className="p-8 text-center">
                 <div className="bg-thai-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                   <BookOpen className="h-8 w-8 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold mb-4 text-thai-gold-dark">มีเนื้อหา</h3>
               </CardContent>
             </Card>

                           <Card className="bg-gradient-card border-thai-gold/20 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-thai-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Image className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-thai-gold-dark">มีรูปภาพ</h3>
                </CardContent>
              </Card>

                                                           <Card className="bg-gradient-card border-thai-gold/20 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="bg-thai-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <Headphones className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-thai-gold-dark">มีเสียง</h3>
                  </CardContent>
                </Card>
           </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
                     <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-thai-gold-dark">
               เรียนรู้เครื่องดนตรีไทยแบบโต้ตอบ
             </h2>
           </div>
          
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {[
               { name: "ระนาดเอก", description: "เครื่องดนตรีประเภทตี" },
               { name: "ขลุ่ยเพียงอ้อ", description: "เครื่องดนตรีประเภทตีเป่า" },
               { name: "ซออู้", description: "เครื่องดนตรีประเภทตีสี" },
               { name: "ฆ้องวงใหญ่", description: "เครื่องดนตรีตีประเภทตี" },
               { name: "แคน", description: "เครื่องดนตรีประเภทเป่า" },
               { name: "พิณ", description: "เครื่องดนตรีประเภทดีด" }
             ].map((instrument, index) => (
              <Card key={index} className="bg-gradient-card border-thai-gold/20 hover:shadow-thai transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-thai-gold rounded-lg w-full h-32 flex items-center justify-center mb-4">
                    <Music className="h-12 w-12 text-foreground" />
                  </div>
                  <h4 className="font-semibold text-thai-gold-dark mb-2">{instrument.name}</h4>
                  <p className="text-sm text-muted-foreground">{instrument.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-thai-gold/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            พร้อมเริ่มต้นเรียนรู้แล้วหรือยัง?
          </h2>
                     <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
             ดาวน์โหลดแอปพลิเคชันเรียนรู้เครื่องดนตรีไทยเบื้องต้นได้ฟรี วันนี้
           </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                         <Button variant="thai-outline" size="lg" className="text-lg px-12 py-6 bg-white/90 hover:bg-white dark:bg-transparent" onClick={handleDownload}>
               <Download className="mr-2 h-6 w-6" />
               ดาวน์โหลดฟรี
             </Button>
            <div className="flex items-center gap-4 text-foreground/80">
              <Shield className="h-5 w-5" />
              <span>ปลอดภัย 100% ไม่มีโฆษณา</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-thai-gold-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
                         <div>
               <h3 className="text-2xl font-bold mb-4">เรียนรู้เครื่องดนตรีไทยเบื้องต้น</h3>
               <p className="text-white/80 leading-relaxed">
                 แอพพลิเคชั่นเรียนรู้เครื่องดนตรีไทย สำหรับผู้เริ่มต้น
               </p>
             </div>
                         <div>
               <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
               <p className="text-white/80">
                 Email: thaiinstrumentmsu@gmail.com
               </p>
             </div>
                         <div>
               <h4 className="text-lg font-semibold mb-4">เวอร์ชั่น</h4>
               <p className="text-white/80">
                 เวอร์ชั่นปัจจุบัน: 1.0.0<br />
                 อัพเดทล่าสุด: สิงหาคม 2025
               </p>
             </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Index;
