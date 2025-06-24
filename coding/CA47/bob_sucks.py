MOD = 10**9 + 7

def mod_inverse(a, p):
    return pow(a, p - 2, p)

def preprocess_factorials(max_n):
    fact = [1] * (max_n + 1)
    for i in range(2, max_n + 1):
        fact[i] = fact[i - 1] * i % MOD
    inv_fact = [1] * (max_n + 1)
    inv_fact[max_n] = mod_inverse(fact[max_n], MOD)
    for i in range(max_n - 1, 0, -1):
        inv_fact[i] = inv_fact[i + 1] * (i + 1) % MOD
    return fact, inv_fact

def comb(n, r, fact, inv_fact):
    if r > n or r < 0:
        return 0
    return fact[n] * inv_fact[r] % MOD * inv_fact[n - r] % MOD

def sum_of_medians(t, test_cases):
    max_n = max(n for n, k, _ in test_cases)
    fact, inv_fact = preprocess_factorials(max_n)

    results = []
    
    for n, k, arr in test_cases:
        count_1 = sum(arr)
        count_0 = n - count_1
        median_pos = k // 2

        sum_medians = 0
        
        if median_pos <= count_0:
            ways_0 = comb(count_0, median_pos, fact, inv_fact) * comb(count_1, k - median_pos, fact, inv_fact) % MOD
            sum_medians = (sum_medians + ways_0 * 0) % MOD

        if median_pos <= count_1:
            ways_1 = comb(count_1, median_pos, fact, inv_fact) * comb(count_0, k - median_pos, fact, inv_fact) % MOD
            sum_medians = (sum_medians + ways_1 * 1) % MOD

        results.append(sum_medians)

    return results

print("Welcome to the world where bob should k*ll himelf...." + '\n') #and kill me too - 

t = int(input("Number of test cases : "))
test_cases = []
for _ in range(t):
    n, k = map(int, input("n and k respectively [each int seperated by spaces]: ").strip().split())
    arr = list(map(int, input("The arryay [each int seperated by spaces] :").strip().split()))
    test_cases.append((n, k, arr))

results = sum_of_medians(t, test_cases)
for result in results:
    print(result) #uttooo yntn wada