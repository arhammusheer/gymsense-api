FROM oven/bun as bun

# Express server running in bun
WORKDIR /app

COPY . .
RUN cd /app && bun install
RUN bun x prisma generate

# Make the ./generated folder available to the remaining code
VOLUME /app/generated

# Run the server

CMD ["bun", "start"]

