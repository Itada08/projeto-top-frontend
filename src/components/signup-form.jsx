import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import logo from "../components/img/logoOfc.jpg";

export function SignupForm({
  ...props
}) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-blue-200">


      <header className="w-full flex justify-center mt-6">
        <div className="w-[90%] flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur rounded-2xl">
          <Image
              src={logo}
              alt="Logo"
              width={40}          
              height={40} 
              style={{ borderRadius: "30%" }}
          />

          <nav className="flex gap-8">
            <Link href="/">Início</Link>
            <Link href="#">Sobre</Link>
            <Link href="#">Serviços</Link>
            <Link href="#">Contato</Link>
          </nav>

          <Link
            href="/login"
            className="px-4 py-2 border rounded-full"
          >
            Login
          </Link>
        </div>
      </header>


      <div className="flex items-center justify-center mt-10 p-6">
        <Card className="w-full max-w-md" {...props}>
          <CardHeader>
            <CardTitle>Criar conta</CardTitle>
            <CardDescription>
              Insira suas informações abaixo para criar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
                  <Input id="name" type="text" placeholder="Francisco de Assis" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                  <FieldDescription>
                    Usaremos este endereço para entrar em contato com você.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <Input id="password" type="password" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirm-password">
                    Confirmar Senha
                  </FieldLabel>
                  <Input id="confirm-password" type="password" required />
                </Field>
                <Field>
                  <Button type="submit" className="w-full mb-2">Criar conta</Button>
                  <Button variant="outline" type="button" className="w-full mb-2">
                    Login com Google
                  </Button>
                  <FieldDescription className="text-center">
                    Já tem uma conta? <Link href="/login">Entrar</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>

      <footer className="w-full flex justify-center mt-10 mb-4">
        <div className="w-[90%] bg-white/70 backdrop-blur rounded-2xl px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Notas Fáceis. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="#">Privacidade</Link>
            <Link href="#">Termos</Link>
            <Link href="#">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
