FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Install basic tools
RUN apt-get update && \
    apt-get install -y \
    python3 \
    python3-pip \
    nodejs \
    npm

COPY . /app/

# Install python reqs
RUN pip3 install -r requirements.txt

EXPOSE 2020

CMD ["python3", "app.py"]