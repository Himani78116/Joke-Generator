from setuptools import setup, find_packages

NAME = "openapi-client"
VERSION = "1.0.0"

REQUIRES = [
    "urllib3>=1.25.3",
    "python-dateutil",
]

setup(
    name=NAME,
    version=VERSION,
    description="Humor API",
    long_description="",
    long_description_content_type="text/markdown",
    author="David",
    author_email="mail@humorapi.com",
    url="",

    python_requires=">=3.6",

    packages=find_packages(exclude=["test", "tests"]),
    include_package_data=True,

    install_requires=REQUIRES,

    keywords=["OpenAPI", "OpenAPI-Generator", "Humor API"],

    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)