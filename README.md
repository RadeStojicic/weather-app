# Vremenska prognoza

Vremenska prognoza je moderna web aplikacija koja korisnicima pruža precizne i ažurirane informacije o vremenskim uslovima.

Aplikacija omogućava korisnicima da brzo i lako dobiju detaljne prognoze, uključujući temperature, vlažnost, pritisak, i druge relevantne meteorološke podatke, kao i prognozu za narednih 5 dana.

Pored vremenskih prognoza, aplikacija sadrži i stranicu sa najnovijim vestima iz sveta meteorologije, omogućavajući korisnicima da ostanu informisani o najnovijim događajima i istraživanjima. Svaka vest ima svoju detaljnu stranicu gde korisnici mogu pročitati više o izabranim temama.

Korisnici takođe imaju mogućnost da personalizuju izgled aplikacije biranjem između svetle i tamne teme, pružajući tako bolje korisničko iskustvo.

Aplikacija nudi i stranice za prijavu (login), registraciju (signup) i kontakt.

Za izradu ove aplikacije korišćen je [OpenWeatherMap](https://openweathermap.org) API.

## Pokretanje projekta na lokalnoj mašini

1. Pokrenuti komandu za kloniranje:

```bash
git clone https://github.com/elab-development/klijentske-veb-tehnologije-2024-2022-0251-vremenska-prognoza.git .
```

2. Nakon toga, instalirati dependencies uz pomoc vašeg omiljenog package managera (pnpm):

```bash
pnpm i
```

3. Onda, napraviti `.env.local` fajl i u njega upisati API key u sledećem formatu:

```bash
VITE_WEATHER_API=openweathermap_api_key
```

4. I pokrenite dev server:

```bash
pnpm dev
```
