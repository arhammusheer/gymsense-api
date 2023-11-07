FROM oven/bun as bun

# Express server running in bun
WORKDIR /app
COPY . .
RUN bun install
RUN bun x prisma generate

COPY . .

CMD ["bun", "start"]

