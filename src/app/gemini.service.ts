import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiKey = 'SUA_CHAVE_API_AQUI';
  private apiUrl = 'https://api.gemini.com/v1/endpoint'; // Substitua pelo endpoint correto

  constructor() { }

  async getResponse(prompt: string) {
    const response = await axios.post(this.apiUrl, {
      prompt: prompt,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
    return response.data;
  }
}