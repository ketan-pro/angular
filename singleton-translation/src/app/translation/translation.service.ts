import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {

    public get fallbackLang() {
        return 'en';
    }

    public get supportedLangs() {
        return [this.fallbackLang, 'ja', 'zh'];
    }

    public get supportedLanguages() {
        return {
            en: 'English',
            ja: 'Japanese',
            zh: 'Chinese'
        };
    }

    constructor(public translate: TranslateService) {
        console.log('initializing translate service');
        this.init();
    }

    private init() {
        // add all languages supported by app.
        this.translate.addLangs(this.supportedLangs);
        // set the fallback language to english by default
        this.translate.setDefaultLang(this.fallbackLang);
        
        // get the language code from storage if exists or from the browser if exists or fallback language
        var curLang = localStorage.getItem('aiq-user-locale') || (navigator.language).substring(0,2) || this.fallbackLang;
        
        // if browser language is not in supported languages, set language to default i.e. english
        if(this.supportedLangs.indexOf(curLang.toLowerCase()) < 0)
        {
            curLang = this.fallbackLang;
        }
        // use the language supported by app.
        this.changeLang(curLang);
    }

    public get currentLangCode() {
        return localStorage.getItem('aiq-user-locale') || this.fallbackLang; 
    }

    public changeLang(lang) {
        localStorage.setItem('aiq-user-locale', lang);
        this.translate.use(this.currentLangCode);
    }
    
    public toLocale(str) {
        return str.replace(/{{lang}}/g, this.currentLangCode);
    }
}