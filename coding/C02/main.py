def count_vowels(word):
    vowels = "aeiouAEIOU"
    count = 0
    
    for char in word:
        if char in vowels:
            count += 1
            
    return count

if __name__ == "__main__":
    user_input = input("Enter a single word: ")
    vowel_count = count_vowels(user_input)
    print("") #belove avg shit lol
    print(f"The number of vowels in '{user_input}' is: {vowel_count}")