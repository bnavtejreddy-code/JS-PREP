numbers = [2, 7, 10, 13, 18, 21]
for num in numbers:
    if num % 2 == 0:
        print(f"{num} is even")
    else:
        print(f"{num} is odd")

students = {
    "Alice": 85,
    "Bob": 72,
    "Charlie": 91,
    "David": 64,
    "Eva": 88
}
highest_score = 0
lowest_score = 100
avg_score = 0
students_with_above80 = 0
for name, score in students.items():
    avg_score += score
    if score > highest_score:
        highest_score = score
        high_scorer = name
    if score < lowest_score:
        lowest_score = score
        low_scorer = name
    if score >= 80:
        students_with_above80 += 1
avg_score /= len(students)
print(f"Highest scorer: {high_scorer} with score {highest_score}")
print(f"Lowest scorer: {low_scorer} with score {lowest_score}")
print(f"Average score: {avg_score}")
print(f"Number of students with above 80: {students_with_above80}")


def analyze_numbers(numbers):

    if not numbers:
        return "The list is empty."

    highest = numbers[0]
    lowest = numbers[0]
    total = 0
    even_count = 0
    odd_count = 0

    for num in numbers:

        total += num

        if num > highest:
            highest = num

        if num < lowest:
            lowest = num

        if num % 2 == 0:
            even_count += 1
        else:
            odd_count += 1

    average = total / len(numbers)

    return {
        "highest": highest,
        "lowest": lowest,
        "sum": total,
        "average": average,
        "even_count": even_count,
        "odd_count": odd_count
    }


numbers = [10, 5, 8, 20, 3, 15]

result = analyze_numbers(numbers)

print(result)