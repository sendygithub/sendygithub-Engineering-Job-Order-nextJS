# Gunakan image Node.js resmi sebagai base
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code
COPY . .

# Build project Next.js
RUN npm run build

# Expose port yang digunakan Next.js
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]