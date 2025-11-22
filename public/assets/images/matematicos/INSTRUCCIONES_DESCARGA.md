# Instrucciones para Descargar Imágenes de Matemáticos

## 📁 Ubicación
Guarda todas las imágenes descargadas en esta carpeta:
`public/assets/images/matematicos/`

## 🎨 Formato Recomendado
- **Formato**: JPG o PNG
- **Tamaño recomendado**: 400-600px de ancho (para web)
- **Peso**: Máximo 200KB por imagen (optimizar para web)

---

## 📥 URLs para Descargar las Imágenes

### 1. René Descartes
**Nombre del archivo**: `descartes.jpg`

**Opción 1 - Alta calidad (Wikimedia Commons):**
```
https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg
```

**Opción 2 - Alternativa:**
```
https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/500px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg
```

---

### 2. Isaac Newton
**Nombre del archivo**: `newton.jpg`

**Opción 1 - Alta calidad (Wikimedia Commons):**
```
https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg
```

**Opción 2 - Alternativa:**
```
https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/500px-GodfreyKneller-IsaacNewton-1689.jpg
```

---

### 3. Pitágoras (Sugerencia adicional)
**Nombre del archivo**: `pitagoras.jpg`

```
https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kapitolinischer_Pythagoras_adjusted.jpg/500px-Kapitolinischer_Pythagoras_adjusted.jpg
```

---

### 4. Euclides (Sugerencia adicional)
**Nombre del archivo**: `euclides.jpg`

```
https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Euklid-von-Alexandria_1.jpg/500px-Euklid-von-Alexandria_1.jpg
```

---

### 5. Arquímedes (Sugerencia adicional)
**Nombre del archivo**: `arquimedes.jpg`

```
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Domenico-Fetti_Archimedes_1620.jpg/500px-Domenico-Fetti_Archimedes_1620.jpg
```

---

### 6. Leonhard Euler (Sugerencia adicional)
**Nombre del archivo**: `euler.jpg`

```
https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Leonhard_Euler_2.jpg/500px-Leonhard_Euler_2.jpg
```

---

## 🔧 Cómo Descargar

### Método 1: Desde el navegador
1. Copia la URL de la imagen que deseas
2. Pégala en la barra de direcciones de tu navegador
3. Click derecho sobre la imagen → "Guardar imagen como..."
4. Guárdala en esta carpeta con el nombre indicado

### Método 2: Usando comando (Windows PowerShell)
Desde la carpeta del proyecto, ejecuta:

```powershell
# Descargar Descartes
Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/500px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg" -OutFile "public\assets\images\matematicos\descartes.jpg"

# Descargar Newton
Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/500px-GodfreyKneller-IsaacNewton-1689.jpg" -OutFile "public\assets\images\matematicos\newton.jpg"
```

### Método 3: Usando comando (Git Bash / Linux / Mac)
```bash
# Descargar Descartes
curl -o public/assets/images/matematicos/descartes.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/500px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg"

# Descargar Newton
curl -o public/assets/images/matematicos/newton.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/500px-GodfreyKneller-IsaacNewton-1689.jpg"
```

---

## ✅ Verificación

Después de descargar, verifica que tengas estos archivos en la carpeta:
```
public/assets/images/matematicos/
├── descartes.jpg
├── newton.jpg
├── pitagoras.jpg (opcional)
├── euclides.jpg (opcional)
├── arquimedes.jpg (opcional)
└── euler.jpg (opcional)
```

---

## 📝 Notas Importantes

1. **Todas las imágenes son de dominio público** de Wikimedia Commons
2. **No requieren atribución**, pero son obras históricas libres de derechos
3. **Optimiza las imágenes** antes de subirlas a producción para mejor rendimiento
4. **Usa herramientas online** como TinyPNG o Squoosh.app para optimizar

---

## 🎨 Herramientas de Optimización Recomendadas

- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim** (Mac): https://imageoptim.com/
- **RIOT** (Windows): https://riot-optimizer.com/
