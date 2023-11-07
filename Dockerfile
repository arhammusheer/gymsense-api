FROM oven/bun as bun

# Express server running in bun
WORKDIR /tmp

# Copy the app
COPY . .

# Install dependencies
RUN bun install
RUN bun x prisma generate

# Setup the docker image
FROM bun as app

# Copy the app
COPY --from=bun /tmp .

# Expose the port
EXPOSE 3000
CMD ["bun", "start"]

