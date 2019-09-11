FROM php:7.3-apache

RUN set -x \
    && apk update \
    && apk upgrade \
    && apk --no-cache add git openssh nodejs nodejs-npm zip rsync \
    #&& npm  install -g jscs@3.0.4 \
    #&& npm install -g jshint \
    && npm install -g grunt-cli \
    #&& npm install -g phantomjs \
    && npm install -g eslint@5.10.0 \
    && npm install -g eslint-config-wordpress@2.0.0 \
    && npm install -g eslint-plugin-react@7.11.1 \
    && npm install -g eslint-plugin-babel@5.3.0 \
    && npm install -g babel-eslint@10.0.2  \
    && npm install -g git://github.com/WordPress-Coding-Standards/eslint-plugin-wordpress.git#1774343f6226052a46b081e01db3fca8793cc9f1 \
    && curl -s http://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && chmod +x /usr/local/bin/composer \
    && composer global require "squizlabs/php_codesniffer=*" \
    && composer global require wp-coding-standards/wpcs \
    && rm -rf /var/cache/apk/*