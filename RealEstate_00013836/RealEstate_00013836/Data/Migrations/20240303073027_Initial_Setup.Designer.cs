﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RealEstate_00013836.Data;

#nullable disable

namespace RealEstate_00013836.Data.Migrations
{
    [DbContext(typeof(RealEstate_00013836_DbContext))]
    [Migration("20240303073027_Initial_Setup")]
    partial class Initial_Setup
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.26")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("RealEstate_00013836.Models.Apartment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<double?>("Area")
                        .IsRequired()
                        .HasColumnType("float");

                    b.Property<DateTime?>("CompletionDate")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HouseTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsAvailable")
                        .IsRequired()
                        .HasColumnType("bit");

                    b.Property<bool?>("IsForRent")
                        .IsRequired()
                        .HasColumnType("bit");

                    b.Property<int?>("Location_Id")
                        .HasColumnType("int");

                    b.Property<double?>("Price")
                        .IsRequired()
                        .HasColumnType("float");

                    b.Property<int?>("Vendor_Id")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Location_Id");

                    b.HasIndex("Vendor_Id");

                    b.ToTable("Apartments");
                });

            modelBuilder.Entity("RealEstate_00013836.Models.Location", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Region")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Locations");
                });

            modelBuilder.Entity("RealEstate_00013836.Models.Vendor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("Age")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<DateTime?>("BirthDate")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<string>("FName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Vendors");
                });

            modelBuilder.Entity("RealEstate_00013836.Models.Apartment", b =>
                {
                    b.HasOne("RealEstate_00013836.Models.Location", "Location_")
                        .WithMany()
                        .HasForeignKey("Location_Id");

                    b.HasOne("RealEstate_00013836.Models.Vendor", "Vendor_")
                        .WithMany()
                        .HasForeignKey("Vendor_Id");

                    b.Navigation("Location_");

                    b.Navigation("Vendor_");
                });
#pragma warning restore 612, 618
        }
    }
}