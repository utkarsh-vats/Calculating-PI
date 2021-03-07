class Block {
    constructor(x, w, m, v, x_ = 0) {
        this.x = x;
        this.y = height - w;
        this.w = w;
        this.v = v;
        this.m = m;
        this.xConst = x_;
    }

    update() {
        this.x += this.v;
    }

    show() {
        const x = constrain(this.x, this.xConst, width);
        rect(x, this.y, this.w, this.w);
    }

    collide(other) {
        return !(this.x + this.w < other.x || this.x > other.x + other.w);
    }

    bounce(other) {
        let deno = this.m + other.m;
        let newV = ((this.m - other.m) / deno * this.v) + (2 * other.m * other.v / deno);
        return newV;
    }

    hitWall(){
        return (this.x <= 0);
    }

    reverse() {
        this.v *= -1;
    }
}