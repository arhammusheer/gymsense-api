FROM oven/bun as bun

# Express server running in bun
WORKDIR /app

COPY . .
RUN cd /app && bun install
RUN bun x prisma generate

COPY . .

CMD ["bun", "start"]

