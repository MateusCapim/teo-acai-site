"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff8f0] text-gray-800">
      <header className="bg-[#4b0082] text-white p-6 shadow-md flex items-center gap-4">
        <Image
          src="/1000048636.jpg"
          alt="Logo Teo Açaí"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">Teo Açaí Distribuidora</h1>
          <p className="text-sm mt-1">Tudo que sua açaiteria precisa em um só lugar</p>
        </div>
      </header>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#4b0082] mb-4">Sobre Nós</h2>
        <p>
          A Teo Açaí Distribuidora atua na área de marketing e fornecimento para
          açaiterias, oferecendo todos os produtos essenciais para o sucesso do
          seu negócio. Nosso objetivo é impulsionar sua loja com qualidade e
          inovação.
        </p>
      </section>

      <section className="p-6 bg-white max-w-4xl mx-auto rounded-2xl shadow mt-4">
        <h2 className="text-2xl font-semibold text-[#4b0082] mb-4">Produtos</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 bg-[#e0d4ff] rounded-lg">Polpas e Mix de Açaí</li>
          <li className="p-4 bg-[#e0d4ff] rounded-lg">Coberturas e Toppings</li>
          <li className="p-4 bg-[#e0d4ff] rounded-lg">Copos e Embalagens</li>
          <li className="p-4 bg-[#e0d4ff] rounded-lg">Aventais e Utensílios</li>
        </ul>
      </section>

      <section className="p-6 max-w-4xl mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-[#4b0082] mb-4">Contato</h2>
        <Card>
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="text-[#4b0082]" />
              <span>(00) 00000-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-[#4b0082]" />
              <span>contato@teoacai.com</span>
            </div>
            <Button className="mt-4 bg-[#4b0082] hover:bg-[#3a0069]">Enviar Mensagem</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-[#4b0082] text-white text-center p-4 mt-6">
        <p>&copy; {new Date().getFullYear()} Teo Açaí Distribuidora. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}