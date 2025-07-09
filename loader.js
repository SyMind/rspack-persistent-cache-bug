module.exports = function () {
    const { pagePath } = this.getOptions();
    return `import * as userland from "${pagePath}";
console.log(userland);`;
}
