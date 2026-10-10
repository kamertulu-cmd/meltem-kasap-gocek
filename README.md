# Meltem Kasap Göcek: demo web sitesi ve mağaza tasarımı

Bahar Kasap'ın Göcek şubesi için önerilen isim: **Meltem Kasap** ("Çiftlikten limana"). Klasör iki şey içerir:

- `index.html`: tek sayfalık statik site (mağaza çizimleri sekmeli, tekneye teslim için WhatsApp mesajı hazırlayan sipariş formu)
- `tasarim-cephe.svg`, `tasarim-ic-mekan.svg`, `tasarim-kat-plani.svg`: mağaza çizimleri (SVG)

## Çalıştırma
Derleme gerekmez. `index.html` dosyasını tarayıcıda açın ya da klasörde şunu çalıştırın:

```
python3 -m http.server 8000
```

## Değiştirilecek yerler
- WhatsApp numarası: `main.js` içinde `NUMBER`
- Adres, telefon, açılış tarihi: `index.html`, "Göcek'te görüşürüz" bölümü (örnek içeriktir)
- Tezgâh listesi: `index.html`, "Açılışta tezgâhta" bölümü
- Bahar Kasap bağlantısı: `../bahar-kasap/index.html`

## Notlar
- Sipariş formu hiçbir yere kayıt göndermez; yalnızca WhatsApp mesajı hazırlar.
- `tasarim-*.svg` dosyaları tek başına açıldığında sistem yazı tipiyle görünür; sitede ise gömülü yazı tipleriyle görünür.
- Yazı tipleri (Archivo, Newsreader, Zilla Slab) siteye gömülüdür; SIL Open Font License altındadır.
- İsmin marka tescili ve alan adı uygunluğu kontrol edilmemiştir; kesinleştirmeden önce TÜRKPATENT sorgusu yapılmalıdır.

## Dosya düzeni
Tüm dosyalar tek klasörde (depo kökünde) durur: `index.html`, `style.css`, `main.js`, `fonts.css`, `.woff2` yazı tipi dosyaları ve mağaza çizimleri.
