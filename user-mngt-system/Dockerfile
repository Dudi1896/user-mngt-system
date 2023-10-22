# Use an official OpenJDK runtime as a parent image
FROM openjdk:17.0.1-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/user-mngt-system-0.2.1.jar /app/user-mngt-system-0.2.1.jar

# Set the active profile using an environment variable
ENV SPRING_PROFILES_ACTIVE=local

# Expose the port  Spring Boot app runs on
EXPOSE 8080

# Run the JAR file & Provide Build argument for jasypt to access encrypted database resources
CMD ["sh", "-c", "java -Dspring.profiles.active=$SPRING_PROFILES_ACTIVE -Djasypt.encryptor.password=$JASYPT_PASSWORD -jar user-mngt-system-0.2.1.jar"]

