import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private sanitizer: DomSanitizer) { }

  public sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}