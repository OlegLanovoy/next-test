"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
}

export default function BackButton({ label = "Назад" }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
}
