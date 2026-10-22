var TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let existed = this.cache.has(key);

    if (existed) {
        clearTimeout(this.cache.get(key).timer);
    }

    let timer = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
        value: value,
        timer: timer
    });

    return existed;
};

TimeLimitedCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }

    return this.cache.get(key).value;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};