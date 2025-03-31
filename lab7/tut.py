def is_even(number):
    """
    Determines if a number is even.
    """
    return number % 2 == 0

def factorial(n):
    """
    Calculates the factorial of a non-negative integer n.
    """
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def find_primes(limit):
    """
    Finds all prime numbers up to a given limit.
    """
    primes = []
    for num in range(2, limit + 1):
        is_prime = True
        for divisor in range(2, int(num**0.5) + 1):
            if num % divisor == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
    return primes

def fibonacci_sequence(n):
    """
    Generates the first n numbers in the Fibonacci sequence.
    """
    sequence = []
    a, b = 0, 1
    while len(sequence) < n:
        sequence.append(a)
        a, b = b, a + b
    return sequence

def reverse_string(s):
    """
    Reverses a given string.
    """
    return s[::-1]

def sleep_in(weekday, vacation):
  if weekday == True and vacation == False:
    return False
  
  return True

def diff21(n):
  if n > 21:
    return 2*(n-21)
  return 21-n

def near_hundred(n):
  return abs(100-n) <= 10 or abs(200-n) <= 10

def missing_char(str, n):
  return str[0:n]+str[n+1: len(str)]

def monkey_trouble(a_smile, b_smile):
  return a_smile ^ b_smile == False
  
def has23(nums):
  if 2 in nums or 3 in nums:
    return True
    
  return False

def round_sum(a, b, c):
  return round_sht(a)+round_sht(b)+round_sht(c)
    
def round_sht(a):
  sum = a
  mod = sum%10
  if mod < 5:
    sum -= mod
    return sum
  else:
    sum += 10-mod
    return sum
  
def cat_dog(str):
  count_cat = str.count("cat")
  count_dog = str.count("dog")
  
  return count_cat == count_dog

def centered_average(nums):
  nums.remove(max(nums))
  nums.remove(min(nums))
  avg = int(sum(nums)/len(nums))
  return avg


def main():
    # Input/Output and Conditional Statements
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    if age < 18:
        print(f"Hello, {name}! You are a minor.")
    else:
        print(f"Hello, {name}! You are an adult.")

    # Using the is_even function
    number = int(input("Enter a number to check if it's even: "))
    if is_even(number):
        print(f"{number} is even.")
    else:
        print(f"{number} is odd.")

    # Using the factorial function
    n = int(input("Enter a number to calculate its factorial: "))
    print(f"The factorial of {n} is {factorial(n)}.")

    # Using the find_primes function
    limit = int(input("Find prime numbers up to: "))
    primes = find_primes(limit)
    print(f"Prime numbers up to {limit}: {primes}")

    # Using the fibonacci_sequence function
    terms = int(input("Enter the number of terms for the Fibonacci sequence: "))
    fibonacci = fibonacci_sequence(terms)
    print(f"The first {terms} terms of the Fibonacci sequence are: {fibonacci}")

    # Using the reverse_string function
    string_to_reverse = input("Enter a string to reverse: ")
    print(f"The reverse of '{string_to_reverse}' is '{reverse_string(string_to_reverse)}'.")

if __name__ == "__main__":
    main()
