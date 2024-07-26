# Bosqich 1: Build bosqichi
FROM node:20 AS build

# Ishchi katalogini yaratish
WORKDIR /arxealogiya1

# Paketlar fayllarini nusxalash va o'rnatish
COPY package.json ./
COPY package-lock.json ./
RUN npm cache clean --force
RUN npm install

# Loyha fayllarini nusxalash
COPY . ./

# React loyhasini qurish
RUN npm run build

# Bosqich 2: Production bosqichi
FROM node:20

# Ishchi katalogini yaratish
WORKDIR /arxealogiya1

# Qurilgan fayllarni nusxalash
COPY --from=build /arxealogiya1/build /arxealogiya1/build

# Serve dasturini o'rnatish
RUN npm install -g serve

# Standart portni ochish
EXPOSE 5000

# Serve dasturini ishga tushirish
CMD ["serve", "-s", "build", "-l", "5000"]
