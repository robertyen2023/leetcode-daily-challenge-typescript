export default () => {
    console.log('1155. Number of Dice Rolls With Target Sum');
}

const numRollsToTarget = (n: number, k: number, target: number): number {
    // check the analysis again at [https://www.youtube.com/watch?v=hfUxjdjVQN4&ab_channel=NeetCodeIO]
    // cache 1. https://tinyurl.com/ysf4rraz
    // cache 2. https://tinyurl.com/yq7puwmj
    // cache 3. cache (n, target)

    const MODULO = 10 ** 9 + 7;

    const count = (n: number, target: number): number => {
        // the best case when we don't know the constraints
        // no dice to 
        if (n === 0) {
            // a valid way
            if (target === 0) return 1;

            // invalid
            return 0;
        }

    }

    return count(n, target);
};
