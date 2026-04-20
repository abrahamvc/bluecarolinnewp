FROM ubuntu:latest
ARG RUBY_VERSION=3.3.11

ENV PATH="/root/.rbenv/bin:/root/.rbenv/shims:${PATH}"
RUN apt update &&\
    apt install -y software-properties-common &&\
    add-apt-repository ppa:git-core/ppa &&\
    apt update &&\
    apt install -y git curl build-essential autoconf libssl-dev libyaml-dev zlib1g-dev libffi-dev libgmp-dev rustc &&\
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv &&\
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build &&\
    rbenv install $RUBY_VERSION &&\
    rbenv global $RUBY_VERSION

WORKDIR app
COPY Gemfile .
RUN bundle install

ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]