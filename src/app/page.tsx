"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(query.trim() !== "" || cuisine !== "" || maxTime !== "");
  }, [query, cuisine, maxTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (cuisine) params.append("cuisine", cuisine);
    if (maxTime) params.append("maxTime", maxTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <main className="container mx-auto py-10 px-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Recipe Search</CardTitle>
          <CardDescription>
            Find delicious recipes based on your preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="query">Recipe Query</Label>
              <Input
                id="query"
                placeholder="Enter ingredients or dish name (e.g., pasta)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cuisine">Cuisine</Label>
              <Select value={cuisine} onValueChange={setCuisine}>
                <SelectTrigger id="cuisine">
                  <SelectValue placeholder="Select cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="thai">Thai</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="mediterranean">Mediterranean</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxTime">
                Maximum Preparation Time (minutes)
              </Label>
              <Input
                id="maxTime"
                type="number"
                placeholder="e.g., 30"
                min="1"
                value={maxTime}
                onChange={(e) => setMaxTime(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full" disabled={!isFormValid}>
              Next
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
