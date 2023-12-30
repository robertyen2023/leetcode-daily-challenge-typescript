export default () => {
    console.log('leetcode problem 1531 solution');
    console.log("result of minCost('abaac', [1,2,3,4,5]): ", minCost('abaac', [1,2,3,4,5]));
    console.log("result of minCost('abc', [1,2,3]): ", minCost('abc', [1,2,3]));
    console.log("result of minCost('aabaa', [1,2,3,4,1]): ", minCost('aabaa', [1,2,3,4,1]));
}

function minCost(colors: string, neededTime: number[]): number {
    // Apply the 2-pointer technique
    // 1. Init the variables (res, l, and the r in the for loop)
    // 2. Handle the same adjacent color situation
    // 3. Manipulate the pointers 

    let res: number = 0;
    let l: number = 0;

    for (let r = 1; r < colors.length; r++) {
        if (colors[l] === colors[r]) {
            if (
                neededTime[l] < neededTime[r]
                // || neededTime[l] === neededTime[r]
            ) {
                res += neededTime[l];

                // l += 1 is wrong
                // cuz the l might move to the position that the element has been removed
                // so we move the l to r
                // and the r will be moved to the position that is next to l in the next round
                l = r;
            } else {
                res += neededTime[r];
            }
        } else {
            // l += 1 is wrong
            // cuz the l might move to the position that the element has been removed
            // so we move the l to r
            // and the r will be moved to the position that is next to l in the next round
            l = r;
        }
    }

    return res;
};
