const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const axios = require('axios');
const cheerio = require('cheerio');

const SOURCES = [
  { country: 'brazil', url: 'https://football-logos.cc/brazil/' },
  { country: 'portugal', url: 'https://football-logos.cc/portugal/' }
];

const PASTA_ESCUDOS = path.join(__dirname, 'escudos');

async function baixarEscudos() {
  if (!fs.existsSync(PASTA_ESCUDOS)) {
    fs.mkdirSync(PASTA_ESCUDOS, { recursive: true });
  }

  for (const source of SOURCES) {
    console.log(`\n🔍 Mapeando escudos em: ${source.url}`);

    try {
      const { data: html } = await axios.get(source.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
      });

      const $ = cheerio.load(html);
      const urls = new Set();

      $('img').each((_, el) => {
        const src = $(el).attr('src') || $(el).attr('data-src');
        
        // Filtra APENAS as imagens pertencentes aos clubes do país selecionado
        if (src && src.includes(`/logos/${source.country}/`)) {
          const fullUrl = src.startsWith('http') ? src : `https://football-logos.cc${src}`;
          urls.add(fullUrl);
        }
      });

      console.log(`📌 Encontrados ${urls.size} escudos para ${source.country}. Iniciando downloads...`);

      for (const url of urls) {
        const fileName = path.basename(url);
        const savePath = path.join(PASTA_ESCUDOS, fileName);

        try {
          const res = await axios({
            method: 'GET',
            url: url,
            responseType: 'arraybuffer',
            headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
          });

          fs.writeFileSync(savePath, res.data);
          console.log(`✔ Baixado: ${fileName}`);
        } catch (err) {
          console.log(`✖ Erro ao baixar ${fileName}: ${err.response?.status || err.message}`);
        }
      }
    } catch (err) {
      console.error(`❌ Erro ao acessar ${source.country}:`, err.message);
    }
  }

  console.log('\n📦 Compactando arquivos em escudos.zip...');
  try {
    execSync('zip -r ../escudos.zip .', { cwd: PASTA_ESCUDOS });
    console.log('🎉 Sucesso! Arquivo escudos.zip gerado na raiz.');
  } catch (err) {
    console.error('Erro ao gerar arquivo zip:', err.message);
  }
}

baixarEscudos();